pipeline {
  agent any
  tools {
    nodejs 'nodejs-22.11.0'
  }

  environment {
    NODEJS_HOME = 'C:/Program Files/nodejs'
    SONAR_SCANNER= 'C:/Program Files/sonar-scanner-6.2.1.4610-windows-x64/bin'
    SONAR_TOKEN = credentials('sonar-token')
  }

  stages {
    stage('checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install Dependencies') {
      steps {
        bat '''
            set PATH=%NODEJS_HOME%;%PATH%
            npm install
            '''
      }
    }

    stage('Lint') {
      steps {
        bat '''
              set PATH=%NODEJS_HOME%;%PATH%
              npm run lint
            '''
      }
    }

    stage('Build') {
      steps {
        bat '''
            set PATH=%NODEJS_HOME%;%PATH%
            npm run build
            '''
      }
    }

    stage('SonarQube Analysis') {
      steps {
        bat '''
            set PATH=%SONAR_SCANNER%;%PATH%
            where sonar-scanner || echo "Sonarcube not found. PLease install it."
            sonar-scanner -Dsonar.projectKey=frontend-pipeline ^ 
                          -Dsonar.sources=. ^
                          -Dsonar.host.url=http://localhost:9000 ^
                          -Dsonar.token=%SONAR_TOKEN%
            '''
      }
    }
  }

  post {
    success {
      echo 'Pipeline success'
    }
    failure {
      echo 'Pipeline failed'
    }
    always {
      echo 'This runs regardless of the result'
    }
  }
}
