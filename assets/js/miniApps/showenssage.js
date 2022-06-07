//alert-success = exitoso
//alert-danger = error
//alert-warning = advertencia
const showMessage = (alert, message, cssClass)=>{
    let icono
    switch (cssClass) {
      case 'success':
        icono = `<i class="fa fa-check"></i>`
        break;
      case 'danger':
        icono = `<i class="fa fa-close"></i>`
        break;
      case 'warning':
        icono = `<i class="fa fa-exclamation-triangle"></i>`
        break;
    
      default:
        icono = '<i class="fa fa-info"></i>'
        break;
    }
    const div = document.createElement('div');
    div.className = `alert alert-${cssClass}`;
    div.innerHTML = 
    `<span class="icon">
    ${icono}
  </span>
  
  <div class="text">
    <strong> ${alert} </strong>
    <p> ${message}! </p>
  </div>
  
  <button class="close">
    <i class="fa fa-close"></i>
  </button>`
    
    const container =  document.querySelector('body');
    const before = document.querySelector('.navbar');
    container.insertBefore(div,before);
  
    const alert_close = document.querySelector('.alert .close');
  
      alert_close.addEventListener('click', function()
      {
        this.closest('.alert').classList.add('close');
        
        this.closest('.alert').addEventListener('transitionend', function(event){
          if(event.propertyName=='transform')
          {
            this.remove();
          }
        });
      });
    setTimeout(function(){
        document.querySelector('.alert').classList.add('close');
        setTimeout(function(){   
          document.querySelector('.alert').remove()
        }, 1000)
    }, 3000)
  
  }