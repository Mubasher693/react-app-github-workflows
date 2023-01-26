module.exports = {
    branches: "master",
    repositoryUrl: "https://github.com/Mubasher693/react-app-github-workflows",
    plugins: [
        '@semantic-release/commit-analyzer', 
        '@semantic-release/release-notes-generator', 
        '@semantic-release/github'
    ]

}