var el = document.querySelector('#postdata');
if (el) {
    el.addEventListener('submit', postdata);
}

function postdata(event) {
    event.preventDefault();
    let url = 'https://san.tamilsms.blog/post.php';
    let title = document.querySelector('#title').value;
    let html = document.querySelector('#html').value;
    let html = document.querySelector('#email').value;
    if (title == 0 || html == 0 || email == 0) {
        document.getElementById('push').innerHTML = '<p class="alert alert-warning text-center">Empty Title or Message</p></div>';
    } else {
        if (url == 0) {
            console.log('API URL MISSING');
            document.querySelector('#push').innerHTML = '<p class="alert alert-warning text-center">API URL MISSING</p>'
        } else {
            html = encodeURI(html);
            fetch(url + '?title=' + title + '&html=' + html + '&excerpt=' + email, {
                    method: 'POST',
                })
                .then((response) => {
                    console.log(response);
                    if (response.status === 200) {
                        el.reset(),
                            setTimeout(() => {
                                document.querySelector('#push').innerHTML = '<p class="alert alert-warning text-center">Successfully Your Kavithai Was Posted</p>'
                            }, 1000);
                        setTimeout(() => {
                            window.location.reload();
                        }, 3000);
                    } else {
                        el.reset(),
                            setTimeout(() => {
                                document.querySelector('#push').innerHTML = '<p class="alert alert-warning text-center">Failed to Publish Post</p>'
                            }, 1000);
                        setTimeout(() => {
                            window.location.reload();
                        }, 3000);
                    }
                })
                .catch(error => {
                    console.log('Error:', error);
                    el.reset(),
                        setTimeout(() => {
                            document.querySelector('#push').innerHTML = '<p class="alert alert-warning text-center">API Error or Connection Lost</p>'
                        }, 1000);
                    setTimeout(() => {
                        window.location.reload();
                    }, 3000);
                })
        }
    }
}