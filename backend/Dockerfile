FROM python:3.12-slim AS base


WORKDIR /app
COPY requirements.txt .

RUN pip install -r requirements.txt

COPY . .
EXPOSE 8000
ENV PORT=8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
