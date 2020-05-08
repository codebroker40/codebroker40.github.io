#![feature(proc_macro_hygiene, decl_macro)]

#[macro_use] extern crate rocket;
extern crate rocket_contrib;

use rocket::response::{NamedFile, content};

use std::path::Path;

#[get("/")]
fn open_index () -> content::Html<NamedFile> {
    content::Html(NamedFile::open(Path::new("index.html")).unwrap())
}

#[get("/style.css")]
fn open_css () -> content::Css<NamedFile> {
    content::Css(NamedFile::open(Path::new("style.css")).unwrap())
}

#[get("/search.js")]
fn open_search () -> content::JavaScript<NamedFile> {
    content::JavaScript(NamedFile::open(Path::new("search.js")).unwrap())
}


#[get("/background.jpg")]
fn open_bg () -> NamedFile {
    NamedFile::open(Path::new("background.jpg")).unwrap()
}


fn main() {
    rocket::ignite()
	.mount("/", routes![open_index, open_css, open_search, open_bg])
	.launch();
}
