/********************************HOME*********************************/
$('#btnCargarHome').click(function(){
    $.ajax({

        url: "home.html",
        beforeSend: function(){
            $('#principal').text('Cargando...');
        },
        success: function(data){
            setTimeout(function(){
                $('#principal').html(data);
            });
        }

    });
});

/********************************REGISTRO*********************************/
$('#btnCargarRegistro').click(function(){
    $.ajax({

        url: "registro.html",
        beforeSend: function(){
            $('#principal').text('Cargando...');
        },
        success: function(data){
            setTimeout(function(){
                $('#principal').html(data);
            });
        }

    });
});
/********************************Iniciar Sesion********************************/
$('#btnCargarSesion').click(function(){
    $.ajax({

        url: "sesion.html",
        beforeSend: function(){
            $('#principal').text('Cargando...');
        },
        success: function(data){
            setTimeout(function(){
                $('#principal').html(data);
            });
        }

    });
});
/********************************Tienda********************************/
$('#btnCargarTienda').click(function(){
    $.ajax({

        url: "tienda.html",
        beforeSend: function(){
            $('#principal').text('Cargando...');
        },
        success: function(data){
            setTimeout(function(){
                $('#principal').html(data);
            });
        }

    });
});
/********************************Talleres********************************/
$('#btnCargarTalleres').click(function(){
    $.ajax({

        url: "talleres.html",
        beforeSend: function(){
            $('#principal').text('Cargando...');
        },
        success: function(data){
            setTimeout(function(){
                $('#principal').html(data);
            });
        }

    });
});
