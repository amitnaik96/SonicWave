pipeline {
  agent any
  tools {
    nodejs 'nodejs-22.11.0'
  }

  environment {
    NODEJS_HOME = 'C:/Program Files/nodejs'
    SONAR_SCANNER= 'C:/Program Files/sonar-scanner-6.2.1.4610-windows-x64/bin'
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
            environment {
                SONAR_TOKEN = credentials('sonar-token') // Accessing the SonarQube token stored in Jenkins credentials
            }
            steps {
                // Ensure that sonar-scanner is in the PATH
                bat '''
                set PATH=%SONAR_SCANNER_PATH%;%PATH%
                where sonar-scanner || echo "SonarQube scanner not found. Please install it."
                sonar-scanner -Dsonar.projectKey=frontend-pipeline ^
                    -Dsonar.sources=. ^
                    -Dsonar.host.url=http://localhost:9000 ^
                    -Dsonar.token=%SONAR_TOKEN% 2>&1
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
