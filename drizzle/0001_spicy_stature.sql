CREATE TABLE "Expenses" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"amount" numeric DEFAULT 0 NOT NULL,
	"budgetId" integer,
	"createdBy" varchar NOT NULL
);
--> statement-breakpoint
ALTER TABLE "Expenses" ADD CONSTRAINT "Expenses_budgetId_Budgets_id_fk" FOREIGN KEY ("budgetId") REFERENCES "public"."Budgets"("id") ON DELETE no action ON UPDATE no action;