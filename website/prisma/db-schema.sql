CREATE TABLE "public"."User" (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255),
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
);

/*
CREATE TABLE "public"."Order" (
  id SERIAL PRIMARY KEY NOT NULL,
  date DATE NOT NULL,
  total INT NOT NULL,
  payed BOOLEAN NOT NULL,
  user_id INT NOT NULL,
  plan_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES "public"."User"(id),
  FOREIGN KEY (plan_id) REFERENCES "public"."Plan"(id)
);

CREATE TABLE "public"."Plan" (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  price INT NOT NULL,
  duration INT NOT NULL, -- in days
);

CREATE TABLE "public"."UserPlan" (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INT NOT NULL,
  plan_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES "public"."User"(id),
  FOREIGN KEY (plan_id) REFERENCES "public"."Plan"(id)
);
*/


