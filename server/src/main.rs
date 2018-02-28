extern crate pony;
extern crate hyper;
use pony::pony_builder::PonyBuilder;
use hyper::server::Http;
use hyper::server::NewService;

fn main() {
    let addr = "127.0.0.1:3333".parse().unwrap();
    let mut ce = PonyBuilder::new();
    ce.use_static("../");
    let handler = Http::new().bind(&addr, move || ce.new_service()).unwrap();
    println!("Listening on 3333");
    let _ = handler.run();
    println!("Server closing");
}
