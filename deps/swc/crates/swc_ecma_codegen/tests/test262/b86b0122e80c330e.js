function* a() {
    ({
        *[yield] () {}
    });
}