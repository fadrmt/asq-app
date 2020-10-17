from rest_framework import serializers
from .models import Question, Answer


class QuestionSerializer(serializers.ModelSerializer):
    """Serializer for listing question details"""

    # Computed fields
    answer_count = serializers.SerializerMethodField()

    class Meta:
        model = Question
        fields = '__all__'

    # Compute data for field 'answer_count'
    def get_answer_count(self, obj):
        return obj.question_answers.count()


class AnswerSerializer(serializers.ModelSerializer):
    """Serializer for listing answer details"""
    class Meta:
        model = Answer
        fields = '__all__'
