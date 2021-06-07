from django.db import models

# Create your models here.
class User(models.Model):

  class Gender(models.TextChoices):
    'MALE'
    'FEMALE'

  class Goal(models.TextChoices):
    'LOSE'
    'MAINTAIN'
    'GAIN'

  class BodyType(models.TextChoices):
    'ECTOMORPH'
    'MESOMORPH'
    'ENDOMORPH'
    
  name = models.CharField( default="", max_length=50)
  password = models.CharField(default="", max_length = 50, unique=True)
  gender = models.CharField(choices = Gender, max_length = 20)
  age = models.IntegerField() # in years
  weight = models.FloatField() # in kilograms
  height = models.FloatField() # in centimeters
  goal = models.CharField(choices = Goal, default = 'MAINTAIN', max_length=8)
  body_type = models.CharField(choices = BodyType, default = 'MESOMORPH', max_length = 10)
  sleep = models.IntegerField()
  time_reach_goal = models.IntegerField() # in weeks 





