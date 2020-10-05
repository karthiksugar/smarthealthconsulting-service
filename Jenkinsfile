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
                withAWS(credentials: '23cee124-af8b-480c-a472-ee1574ab7958', region: 'us-east-1') {
                   bat 'npm run deploy'
                }
            }            
        }
    }
}