fetch('menu.html')
      .then(response => response.text())  
      .then(data => {
          document.getElementById('menu-container').innerHTML = data;  
      })
      .catch(error => {
          console.error('Error loading menu:', error);  
      });

      fetch('footer.html')
      .then(response => response.text())  
      .then(data => {
          document.getElementById('footer').innerHTML = data;  
      })
      .catch(error => {
          console.error('Error loading menu:', error);  
      });