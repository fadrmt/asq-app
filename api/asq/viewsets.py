from rest_framework import mixins, viewsets, filters
from django_filters.rest_framework import DjangoFilterBackend
from .models import Question, Answer
from .serializers import QuestionSerializer, AnswerSerializer


class QuestionViewSet(mixins.ListModelMixin, mixins.RetrieveModelMixin,
            mixins.CreateModelMixin, viewsets.GenericViewSet):
    """
    Question Viewset for:
        + listing all questions
        + search questions by titles
        + retrieve a question by id
        + creating a question
    """
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

    # For retrieval
    lookup_field = 'id'

    # For filtering
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]

    # Search questions by case-insensitive partial matches to title
    search_fields = ['title', ]

    # Specify which fields the API may be ordered against
    ordering_fields = ('date_posted')

    # Default ordering: sort by most recent first
    ordering = ('-date_posted')


class AnswerViewSet(mixins.ListModelMixin, mixins.CreateModelMixin, 
            viewsets.GenericViewSet):
    """
    Answer Viewset for:
        + listing all answers
        + filtering all answers by question
        + creating an answer
    """
    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer

    # For filtering
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]

    # Filter by question
    filterset_fields = ['question', ]

    # Specify which fields the API may be ordered against
    ordering_fields = ('date_posted')

    # Default ordering: sort by most recent first
    ordering = ('-date_posted')