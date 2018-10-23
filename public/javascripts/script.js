





document.getElementById("myBtn").addEventListener("click", function(){
	var request = new XMLHttpRequest();
	var username = document.querySelector('#username').value;
	request.open('GET', 'https://api.github.com/users/' + username);
	




request.onload = function() {
    var data = JSON.parse(request.responseText);
    result.innerHTML = `
		<div class="row">
			<div class="col-3">
				<img class="img-fluid" src="${ data.avatar_url }" />
			</div>
			<div class="col-9">
				
				<p class="data-text">Bio : ${ data.bio }</p>
				<p class="data-text">Blog : ${ data.blog }</p>
				<div style="margin-top: 16px">
					<div class="data-badge">Repositories ${ data.public_repos }</div>
					<div class="data-badge">Followers ${ data.followers }</div>
					<div class="data-badge">Following ${ data.following }</div>
				</div>
				<div>
					<button class="btn" onClick="window.open('${ data.html_url }');">View ${ data.name }'s profile</button>
				</div>
			</div>
		</div>
	`;
}

    request.send();
});