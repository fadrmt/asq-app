FROM python:3.6

ENV PYTHONUNBUFFERED=1

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        postgresql-client \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /api

COPY requirements.txt /api
RUN pip install -r requirements.txt

ADD ./ /api

EXPOSE 8000

CMD ./wait-for-it.sh db:5432 --strict --timeout=300 -- ./start.sh
