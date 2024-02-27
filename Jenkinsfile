pipeline{
    agent any
    stages{
        stage('Build'){
            steps{
                bat 'npm install'
                bat 'npm run build'
            }
        }
        stage('run-parallel-server') {
  steps {
    parallel(
      a: {
        bat 'npm run preview'
      },
      b: {
        bat "npx json-server db.json"
      }
    )
  }
}
    }
}