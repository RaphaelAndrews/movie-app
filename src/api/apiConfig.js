const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '19eb99aadd888cae457bf4770051d124',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;