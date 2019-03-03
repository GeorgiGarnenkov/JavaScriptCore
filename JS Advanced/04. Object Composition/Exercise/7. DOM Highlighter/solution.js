function solve(selector) {
    let $children = $(selector).children();
    if ($children.length === 0) {
        $(selector).addClass('highlight');
        return;
    }

    let $nextChild = $children;

    while($nextChild.length){
        $children = $nextChild;
        $nextChild = $nextChild.children();
    }

    $children.first().addClass('highlight');
    $children.first().parentsUntil($(selector).parent()).addClass('highlight');
}