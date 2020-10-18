# Fetch all categories
curl --request GET http://localhost:8000/api/questions/

# Fetch all answers for question id = 2
curl --request GET http://localhost:8000/api/answers/?question=2