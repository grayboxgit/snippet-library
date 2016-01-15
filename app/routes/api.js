/*
 * Serve JSON to our AngularJS client
 */

// For a real app, you'd make database requests here.
// For this example, "data" acts like an in-memory "database"

var data = {
    "posts": [
        {
            "title": "Nav 111",
            "rendered_output": "/library/nav1/index.html",
            "jade_source": "/library/nav1/snippets/jade/nav1.jade",
            "html_source": "<div style='width:200px; height:200px; border:1px solid blue;'></div>",
            "scss_source": "/snippets/scss/nav1.scss",
            "js_source": "/snippets/js/nav1.js"
        },
        {
            "title": "Nav 2",
            "rendered_output": "index.html",
            "jade_source": "/snippets/nav2.jade",
            "html_source": "<div style='width:200px; height:200px; border:1px solid blue;'></div>",
            "scss_source": "/snippets/nav2.scss",
            "js_source": "/snippets/nav2.js"
        }
    ]
};

// GET

exports.posts = function (req, res) {
    //$http.get('content.json').success(function(data) {
    //    mainInfo = data;
    //});
    var posts = [];
    data.posts.forEach(function (post, i) {
        posts.push({
            id: i,
            title: post.title,
            rendered_output: post.rendered_output,
            jade_source: post.jade_source,
            html_source: post.html_source,
            scss_source: post.scss_source,
            js_source: post.js_source
        });
    });
    res.json({
        posts: posts
    });
};

exports.post = function (req, res) {
    var id = req.params.id;
    if (id >= 0 && id < data.posts.length) {
        res.json({
            post: data.posts[id]
        });
    } else {
        res.json(false);
    }
};

// POST

exports.addPost = function (req, res) {
    data.posts.push(req.body);
    res.json(req.body);
};

// PUT

exports.editPost = function (req, res) {
    var id = req.params.id;

    if (id >= 0 && id < data.posts.length) {
        data.posts[id] = req.body;
        res.json(true);
    } else {
        res.json(false);
    }
};

// DELETE

exports.deletePost = function (req, res) {
    var id = req.params.id;

    if (id >= 0 && id < data.posts.length) {
        data.posts.splice(id, 1);
        res.json(true);
    } else {
        res.json(false);
    }
};