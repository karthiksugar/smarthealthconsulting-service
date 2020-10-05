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
                withAWS(credentials: 'aws-credentials', region: 'us-east-1') {
                   bat 'npm run deploy'
                }
            }            
        }
    }
}