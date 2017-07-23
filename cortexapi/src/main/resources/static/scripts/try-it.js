$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});

$(document).ready(function() {
    $("#fileChooserBtn").click(function() {
        $("#fileInput").click();
    });
});

function progressbar() {
    var bar = new ProgressBar.Circle(progressbarCon, {
        color: '#aaa',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 4,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 10000,
        text: {
            autoStyleContainer: false
        },
        from: { color: '#008080', width: 1 },
        to: { color: '#008080', width: 4 },
        // Set default step function for all animate calls
        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value + "%");
            }

            if (value === 100) {
                $("#progressbarCon").empty();
                $("#progressbarCon").hide();
                $("#progressbarText").hide();
                $(".result").show();
                $("#trainBtn").show();
            }
        }
    });
    bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    bar.text.style.fontSize = '2rem';

    bar.animate(1.0);  // Number from 0.0 to 1.0
}

$(document).ready(function() {
    $(".url").prop("disabled", false);
    $("#progressbarCon").hide();
    $("#progressbarText").hide();
    $(".result").hide();
    $("#trainBtn").hide();
    $(".classifyImg").click(function() {
        $(".url").prop("disabled", true);
        $("#progressbarCon").show();
        $("#progressbarText").show();
        progressbar();
        $("#fileChooserBtn").addClass("disableFileChooserBtn");
        $(".classifyBtn").addClass("disableClassifyBtn");
        $(".classifyImg").addClass("opacityClassifyImg");
    });
});

$(document).ready(function() {
    $("#trainBtn").click(function() {
        $(".result").hide();
        $(".url").prop("disabled", false);
        $("#fileChooserBtn").removeClass("disableFileChooserBtn");
        $(".classifyBtn").removeClass("disableClassifyBtn");
        $(".classifyImg").removeClass("opacityClassifyImg");
        $("#trainBtn").hide();
    });
});
