from django.db import models

# Create your models here.

class Question(models.Model):
    title = models.CharField(max_length=150, verbose_name='Question Title', unique=True)
    body = models.TextField(verbose_name='Question Body')
    # Name of User - currently saved as text given there's no authentication
    posted_by = models.CharField(max_length=100, verbose_name='User Name')
    posted_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class Answer(models.Model):
    body = models.TextField(verbose_name='Answer Body')
    # Name of User - currently saved as text given there's no authentication
    posted_by = models.CharField(max_length=100, verbose_name='User Name')
    posted_on = models.DateTimeField(auto_now_add=True)

    # Relationships
    question = models.ForeignKey(Question, related_name='question_answers',
                    verbose_name='Question', on_delete=models.CASCADE)

    def __str__(self):
        return self.id