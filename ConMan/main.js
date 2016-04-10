/**
 * Created by inet2005 on 4/9/16.
 */
$(document).ready(function(){
    sessionStorage.removeItem('currentContactId');
    $('#add-contact').on('submit', function(e){
        e.preventDefault();
        var fName = $('#fName').val();
        var lName = $('#lName').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var twitter = $('#twitter').val();
        var facebook = $('#facebook').val();
        var linkedIn =$('#linkedIn').val();
        var reddit = $('#reddit').val();

        if(sessionStorage.getItem('currentContactId') != null) {
            var id = sessionStorage.getItem('currentContactId');
            var url = 'https://api.mlab.com/api/1/databases/conman/collections/contacts/'+id+'?apiKey=6BVVlG7ON_ObPYKVWK6NW4A8eIRxiizp';
            var type = 'PUT';
        }else{
            var url = 'https://api.mlab.com/api/1/databases/conman/collections/contacts?apiKey=6BVVlG7ON_ObPYKVWK6NW4A8eIRxiizp';
            var type = 'POST';
        }

        $.ajax({
            url: url,
            data: JSON.stringify({
                "fName": fName,
                "lName": lName,
                "email": email,
                "phone": phone,
                "twitter": twitter,
                "facebook": facebook,
                "linkedIn": linkedIn,
                "reddit": reddit
            }),
            type: type,
            contentType: "application/json",
            success: function (data) {
                window.location.href="index.html";
            },
            error: function(xhr, status, err){
                console.log(err);
            }
        });
    });

    $('body').on('click', '#edit', function(e){
        e.preventDefault();
        sessionStorage.setItem('currentContactId', $(this).data('id'));
        $('#fName').val($(this).data('first'));
        $('#lName').val($(this).data('last'));
        $('#email').val($(this).data('email'));
        $('#phone').val($(this).data('phone'));
        $('#twitter').val($(this).data('twitter'));
        $('#facebook').val($(this).data('facebook'));
        $('#linkedIn').val($(this).data('link'));
        $('#reddit').val($(this).data('reddit'));
    });

    $('body').on('click', '#delete', function(e){
        e.preventDefault();
        var id = $(this).data('id');
        var url = 'https://api.mlab.com/api/1/databases/conman/collections/contacts/'+id+'?apiKey=6BVVlG7ON_ObPYKVWK6NW4A8eIRxiizp';
        var type = 'DELETE';

        $.ajax({
            url: url,
            type: type,
            async: true,
            timeout: 300000,
            success: function (data) {
                window.location.href="index.html";
            },
            error: function(xhr, status, err){
                console.log(err);
            }
        });
    });
});

function getContacts(){
    $.ajax({
        url: 'https://api.mlab.com/api/1/databases/conman/collections/contacts?apiKey=6BVVlG7ON_ObPYKVWK6NW4A8eIRxiizp'
    }).done(function(data){
        var output = '<div>';
        $.each(data, function(key, data){
            output += '<div class="well">';
            output += '<h3>'+data.fName+' '+data.lName+'</h3>';
            output += '<p>Email: '+data.email+'</p>';
            output += '<p>Phone: '+data.phone+'</p>';
            output += '<p>Twitter: '+data.twitter+'</p>';
            output += '<p>Facebook: '+data.facebook+'</p>';
            output += '<p>LinkedIn: '+data.linkedIn+'</p>';
            output += '<p>Reddit: '+data.reddit+'</p>';
            output += '<button class="btn-xs btn-primary" id="edit" data-id="'+data._id.$oid+'" data-first="'+data.fName+'" data-last="'+data.lName+'" data-email="'+data.email+'" data-phone="'+data.phone+'" data-twitter="'+data.twitter+'" data-facebook="'+data.facebook+'" data-link="'+data.linkedIn+'" data-reddit="'+data.reddit+'">Edit</button> <button class="btn-xs btn-danger" id="delete" data-id="'+data._id.$oid+'">Delete</button>';
            output += '</div>';
        });
        output += '</div>';
        $('#contacts').html(output);
    });
}

$('body').on('click','img',function(){
    $('#settings').css({"display": "none"});
    var btnDiv = $('#btns');
    $(btnDiv).css({"float": "right"});
    $(btnDiv).append('<h4>Themes:</h4>');
    $(btnDiv).append('<button class="btn-m btn-primary" id="dark">Dark</button> ');
    $(btnDiv).append('<button class="btn-m btn-primary" id="light">Light</button>');
});

$('body').on('click', '#dark', function(){
    $('link[href="bs2.css"]').attr('href','bs1.css');
});

$('body').on('click', '#light', function(){
    $('link[href="bs1.css"]').attr('href','bs2.css');
});