pipeline {
  agent any

  environment {
    IMAGE_NAME = "omkar9089/insurance-policy-app"
  }

  stages {
    stage('Clone') {
      steps {
        git 'https://github.com/Omkar9089/insurance-policy-app'
      }
    }

    stage('Build') {
      steps {
        script {
          docker.build("${IMAGE_NAME}:latest")
        }
      }
    }

    stage('Push') {
      steps {
        script {
          withDockerRegistry([credentialsId: 'dockerhub-creds', url: '']) {
            docker.image("${IMAGE_NAME}:latest").push()
          }
        }
      }
    }

    stage('Deploy to Kubernetes') {
      steps {
        sh 'kubectl apply -f k8s/'
      }
    }
  }
}
