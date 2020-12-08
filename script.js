function getUser(){
    let searchURL = 'https://api.github.com/users/' + $('.user-input').val() + '/repos';
    fetch(searchURL)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => console.log(error))
}
function displayResults(responseJson){
    console.log(responseJson);

    $('.results-users').empty();

    if($('.user-input').val()){
        for(let i = 0; i < responseJson.length; i++){
            $('.results-users').append(
                `<li><a href = "${responseJson[i].url}"<h3>${responseJson[i].name}</h3></a>
                </li>`
            )
        }
    }; 
    
    $('.results').removeClass('hidden');
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        //const searchUser = $('#js-search-user').val();
        getUser();
    });
}

$(function (){
    console.log('the app has sucessfully loaded');
    watchForm();
})


//$('watchForm');