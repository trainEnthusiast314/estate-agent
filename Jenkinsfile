pipline{
    agent any
    stages{
        stage('Build'){
            steps{
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Deploy'){
            steps{
                sh 'npx run preview'
            }
        }
    }
}