pipeline{
    agent any
    stages{
        stage('Build'){
            steps{
                bat 'npm install'
                bat 'npm run build'
            }
        }
        stage('Deploy'){
            steps{
                bat 'npm run preview'
            }
        }
    }
}