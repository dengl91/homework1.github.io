var xmlhttp = new XMLHttpRequest();
xmlhttp.open('GET', 'https://my-json-server.typicode.com/IlyaLytvynov/ads-box-server/ads', true);
xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        var obj = JSON.parse(xmlhttp.responseText);

        var title;
        var img;
        var description;
        var btn;
        var i;
        var content = document.querySelector('.content');
        var item;

        for (i = 0; i < obj.length; i++) {
            item = document.createElement('div');
            item.className = 'item';
            if (i === 0) {
                item.className += ' active';
            }

            img = document.createElement('img');
            img.className = 'item-img';
            img.src = obj[i].img;
            item.appendChild(img);

            title = document.createElement('div');
            title.className = 'item-header';
            title.textContent = obj[i].title;
            item.appendChild(title);

            description = document.createElement('div');
            description.className = 'item-description';
            description.textContent = obj[i].description;
            item.appendChild(description);

            btn = document.createElement('div');
            btn.className = 'item-btn';
            btn.className += ' btn';
            btn.textContent = 'Toggle';
            item.appendChild(btn);

            btn.onclick = function(e) {
                e.target.previousSibling.classList.toggle('active');
            };

            btn = document.createElement('div');
            btn.className = 'item-next';
            btn.className += ' btn';
            btn.textContent = 'Prev';
            item.appendChild(btn);

            btn.onclick = function(e) {
                e.target.parentElement.classList.remove('active');
                if (e.target.parentNode.previousSibling) {
                    e.target.parentElement.previousSibling.classList += ' active';
                } else {
                    e.target.parentElement.parentElement.lastChild.classList += ' active';
                }
            };

            btn = document.createElement('div');
            btn.className = 'item-next';
            btn.className += ' btn';
            btn.textContent = 'Next';
            item.appendChild(btn);

            btn.onclick = function(e) {
                e.target.parentElement.classList.remove('active');
                if (e.target.parentNode.nextSibling) {
                    e.target.parentElement.nextSibling.classList += ' active';
                } else {
                    e.target.parentElement.parentElement.firstChild.classList += ' active';
                }
            };

            content.appendChild(item);
        }

    }

};
xmlhttp.send(null);