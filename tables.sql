CREATE TABLE "questions" (
	"id" serial NOT NULL,
	"question" TEXT NOT NULL,
	"student" TEXT NOT NULL,
	"class" TEXT NOT NULL,
	"tags" TEXT NOT NULL,
	"answered" BOOLEAN NOT NULL,
	"submitAt" timestamp with time zone NOT NULL,
	"answeredAt" timestamp with time zone,
	"answererId" integer,
	"answer" TEXT,
	CONSTRAINT "questions_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);


CREATE TABLE "users" (
	"id" serial NOT NULL,
	"name" TEXT NOT NULL,
	"class" TEXT NOT NULL,
	"token" TEXT NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



ALTER TABLE "questions" ADD CONSTRAINT "questions_fk0" FOREIGN KEY ("answererId") REFERENCES "users"("id");



