const btnDeletes = document.querySelectorAll('.btn-delete')

btnDeletes.forEach((btn)=>{
    btn.addEventListener('click', (e) =>{
        e.preventDefault();

        if(!btn.classList.contains('delete')){
            btn.classList.add('delete')
            setTimeout(()=>{
                btn.classList.remove('delete')
            },3000)
        }
    })
})

