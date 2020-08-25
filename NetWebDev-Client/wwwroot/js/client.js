
$(function() {
    // preload audio
    var toast = new Audio('media/toast.wav');

    $('.code1').on('click',
        function(e) {
            e.preventDefault();
            // first pause the audio (in case it is still playing)
            toast.pause();
            // reset the audio
            toast.currentTime = 0;
            // play audio
            toast.play();
            $('#toast').toast({ autohide: false }).toast('show');
            $(document).on('keydown',
                function(event) {
                    if (event.key == "Escape") {
                        $('#toast').toast('hide')
                    }
                });
            if ($('.code1').first().attr('id') == "col1") {

                $("#toast").data("test", { first: "Chef Anton", last: "32146784693" });
                $("#product").first().text($("#toast").data("test").first);
                $("#code").last().text($("#toast").data("test").last);

            }
            console.log($('.code1').attr('id'));


        });
    $('.code2').on('click',
        function(e) {
            e.preventDefault();
            // first pause the audio (in case it is still playing)
            toast.pause();
            // reset the audio
            toast.currentTime = 0;
            // play audio
            toast.play();
            $('#toast').toast({ autohide: false }).toast('show');
            $(document).on('keydown',
                function(event) {
                    if (event.key == "Escape") {
                        $('#toast').toast('hide');
                    }
                });

            if ($('.code2').attr('id') == "col2") {

                $("#toast").data("test", { first: "Genen Shouyu", last: "63728" });
                $("#product").first().text($("#toast").data("test").first);
                $("#code").last().text($("#toast").data("test").last);

            }

            console.log($('.code2').attr('id'));

            $('.code3').on('click',
                function(e) {
                    e.preventDefault();
                    // first pause the audio (in case it is still playing)
                    toast.pause();
                    // reset the audio
                    toast.currentTime = 0;
                    // play audio
                    toast.play();
                    $('#toast').toast({ autohide: false }).toast('show');
                    $(document).on('keydown',
                        function(event) {
                            if (event.key == "Escape") {
                                $('#toast').toast('hide')
                            }
                        });
                    if ($('.code3').attr('id') == "col3") {

                        $("#toast").data("test", { first: "Schoggi Schokolade", last: "678321" });
                        $("#product").first().text($("#toast").data("test").first);
                        $("#code").last().text($("#toast").data("test").last);

                    }
                    console.log($('.code3').attr('id'));


                });
        });
});