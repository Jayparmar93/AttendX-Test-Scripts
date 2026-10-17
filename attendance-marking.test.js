
const test = require('node:test');
const assert = require('node:assert/strict');

function markAttendance(studentId, status) {
  const validStatuses = ['Present', 'Absent'];

  if (!studentId || !validStatuses.includes(status)) {
    return false;
  }

  return true;
}

test('Attendance should accept Present status', () => {
  assert.equal(markAttendance('STU101', 'Present'), true);
});

test('Attendance should accept Absent status', () => {
  assert.equal(markAttendance('STU102', 'Absent'), true);
});

test('Attendance should reject an empty student ID', () => {
  assert.equal(markAttendance('', 'Present'), false);
});

test('Attendance should reject an invalid status', () => {
  assert.equal(markAttendance('STU103', 'Late'), false);
});
