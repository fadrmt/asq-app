from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import QuestionViewSet, AnswerViewSet


# Register viewsets to a router
router = DefaultRouter()
router.register(r'questions', QuestionViewSet)
router.register(r'answers', AnswerViewSet)

app_name = 'asq'
urlpatterns = [
    path('api/', include(router.urls)),
]