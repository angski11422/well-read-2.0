-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "password" TEXT,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bookclub" (
    "_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT,
    "bookId" INTEGER,
    "creatorId" TEXT NOT NULL,

    CONSTRAINT "Bookclub_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "BookclubMember" (
    "bookclubId" INTEGER NOT NULL,
    "memberId" TEXT NOT NULL,

    CONSTRAINT "BookclubMember_pkey" PRIMARY KEY ("memberId","bookclubId")
);

-- CreateTable
CREATE TABLE "Book" (
    "_id" SERIAL NOT NULL,
    "author" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "coverImage" TEXT,
    "subject" TEXT,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "Bookclub_creatorId_idx" ON "Bookclub"("creatorId");

-- CreateIndex
CREATE INDEX "Bookclub_bookId_idx" ON "Bookclub"("bookId");

-- CreateIndex
CREATE INDEX "BookclubMember_memberId_idx" ON "BookclubMember"("memberId");

-- CreateIndex
CREATE INDEX "BookclubMember_bookclubId_idx" ON "BookclubMember"("bookclubId");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bookclub" ADD CONSTRAINT "Bookclub_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bookclub" ADD CONSTRAINT "Bookclub_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookclubMember" ADD CONSTRAINT "BookclubMember_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookclubMember" ADD CONSTRAINT "BookclubMember_bookclubId_fkey" FOREIGN KEY ("bookclubId") REFERENCES "Bookclub"("_id") ON DELETE CASCADE ON UPDATE CASCADE;

