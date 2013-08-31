(function ($) {
    /**
     * Handle dom.ready event
     */
    $(function () {

        var ajaxEndpoint = 'ajax.php', // Endpoint handle ajax request
            $resultContainer = $('#result-list'),
            $mainContainer = $('#list'),
            defTimeout = 300;


        // Handle click event for all button has data-role=ajax-loading
        $('[data-role="ajax-loading"]').click(function () {
            var act = $(this).data('act');

            $.post(ajaxEndpoint, {
                act: act
            }, function (response) {
                $resultContainer.empty().append(response);
            }, 'html');
        });

        // Handle click event for CHOOSE button
        $resultContainer.on('click', 'li>span', function () {
            var $li = $(this).parent(),
                $_clone = $li.clone().fadeOut();

            $li.fadeOut(300, function () {
                $li.remove();
                $_clone.find('span').text('del');
                $mainContainer.append($_clone.fadeIn(defTimeout));
            });
        });

        // Handle click event for DELETE button
        $mainContainer.on('click', 'li>span', function () {
            $(this).parent().fadeOut(defTimeout, function () {
                // remove it
                $(this).remove();
            });
        });
    });
}(window.jQuery));