// Boolean
let paidAccount: boolean = true;

// Number
let age: number = 33;
var taxRate: number = 7.5;

// String
var fullName: string = "Mar";

// Array
var ages: number[] = [33, 28, 11];

// ☆ Tuple ☆
//       A tuple allows you to have an array or some
//      type of collection when you know the number of
//      elements first and you know they're data types.
let player: [number, string, number, number];
player = [3, "Correa", 0.333, 33];

// Enum
enum ApprovalStatus {
  Approved,
  Pending,
  Rejected,
}
let job: ApprovalStatus = ApprovalStatus.Pending;

// Any
var apiDAta: any[] = [123, "Mich", false];

// Void
function printOut(msg: string): void {
  alert(msg);
}
