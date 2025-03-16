FROM python:3.12-slim

# Set working directory
WORKDIR /app

# Copy relevant files to the container
COPY . .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Expose the port Flask runs on internally
EXPOSE 80

# Set environment variables (optional but recommended)
ENV PYTHONUNBUFFERED=1
ENV FLASK_ENV=production

# Run the application on port 3000 internally
CMD ["python", "app.py"]

