import { cosmic } from "../lib/cosmic";

async function test() {
  try {
    const response = await cosmic.objects.find().limit(1);

    console.log(response);
  } catch (err) {
    console.error(err);
  }
}

test();