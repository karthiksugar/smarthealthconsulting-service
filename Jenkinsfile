pipeline{
    agent any
    
    stages{
        stage('Build'){
            steps{
                bat 'npm install'
            }
        }
        stage('Deploy'){
            steps {
                withCredentials([usernamePassword(credentialsId: '23cee124-af8b-480c-a472-ee1574ab7958', accessKeyVariable: 'AWS_ACCESS_KEY_ID', secretKeyVariable: 'AWS_SECRET_ACCESS_KEY')]) {
                    bat 'echo $AWS_ACCESS_KEY_ID'
                    bat 'echo $AWS_SECRET_ACCESS_KEY'
                }
            }
            steps{
                bat 'npm run deploy'
            }
        }
    }
}