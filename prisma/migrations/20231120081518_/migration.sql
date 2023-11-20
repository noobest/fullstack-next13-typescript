-- CreateTable
CREATE TABLE "Profession" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Profession_pkey" PRIMARY KEY ("id")
);
