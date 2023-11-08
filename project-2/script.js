const openbtn = document.getElementById('open-button');

const modalcontainer = document.getElementById('modal-container');

const closebtn = document.getElementById('close-button');

openbtn.addEventListener('click', function()
{
    modalcontainer.style.display = 'block';
})

closebtn.addEventListener('click', function()
{
    modalcontainer.style.display = 'none';
})

window.addEventListener('click', function(e)
{
    if(e.target === modalcontainer)
    {
        modalcontainer.style.display='none';
    }
});
