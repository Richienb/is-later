import test from "ava"
import isLater from "."

test("main", (t) => {
    t.false(isLater("1.0.0", "2.0.0"))
    t.false(isLater("1.0.0", "1.0.0"))
    t.true(isLater("1.0.0", "0.0.0"))
})
