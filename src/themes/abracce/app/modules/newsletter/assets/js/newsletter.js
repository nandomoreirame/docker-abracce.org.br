!function(a){a("#form_newsletter").submit(function(){var b=a(this),c=b.find(".alert"),d=b.find("#newsletter_name"),e=b.find("#newsletter_email"),f=b.find(".form-control-feedback"),g=d.attr("placeholder"),h=e.attr("placeholder");return""===d.val()&&d.attr("placeholder","Por favor preencha o Nome!"),""===e.val()&&e.attr("placeholder","Por favor preencha o E-mail!"),a.ajax({type:"POST",url:wpAjax.ajaxurl,dataType:"json",data:{action:"SaveNewsletter",newsname:d.val(),newsemail:e.val()},success:function(a){var b=a.typ,i=a.msg;return"success"==b?(d.val(""),e.val(""),c.removeClass("alert-danger").addClass("alert-success")):(d.parent().addClass("has-error"),e.parent().addClass("has-error"),f.fadeIn(),c.addClass("alert-danger")),c.html("<p>"+i+"</p>"),c.fadeIn(),setTimeout(function(){d.parent().removeClass("has-error"),e.parent().removeClass("has-error"),f.fadeOut(),c.fadeOut(),d.attr("placeholder",g),e.attr("placeholder",h)},3e3),!1},error:function(a){return d.parent().addClass("has-error"),e.parent().addClass("has-error"),f.fadeIn(),f.fadeIn(),c.html("<p>"+a+"</p>").addClass("alert-danger"),c.fadeIn(),!1}}),!1}),a("#export_to_excel").on("click",function(b){b.preventDefault();var c=a(this),d="action=ExportToExcel";a.ajax({type:"POST",url:ajaxurl,data:d,success:function(a){return c.parent().find("#script_redirect_export_to_excel").html(a),!1},error:function(a){alert(" Oops ocorreu um erro :( "),console.log(a)}})})}(jQuery);