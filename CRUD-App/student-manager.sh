#!/bin/bash

students_dir="./students"
mkdir -p "$students_dir"

add_student() {
  read -p "Enter name: " name
  read -p "Enter age: " age
  read -p "Enter course: " course

  filename="$students_dir/${name// /_}-$age.txt"
  echo -e "Name: $name\nAge: $age\nCourse: $course" > "$filename"
  echo "✅ Student added: $filename"
}

list_students() {
  if [ -z "$(ls -A "$students_dir")" ]; then
    echo "📭 No students found."
    return
  fi

  echo "📚 List of Students:"
  for file in "$students_dir"/*.txt; do
    echo -e "\n--- $(basename "$file") ---"
    cat "$file"
  done
}

update_student() {
  read -p "Enter current name: " name
  read -p "Enter current age: " age
  file="$students_dir/${name// /_}-$age.txt"

  if [ ! -f "$file" ]; then
    echo "❌ Student not found."
    return
  fi

  echo "Current info:"
  cat "$file"

  read -p "Enter new name (press Enter to keep '$name'): " new_name
  read -p "Enter new age (press Enter to keep '$age'): " new_age
  read -p "Enter new course: " new_course

  new_name="${new_name:-$name}"
  new_age="${new_age:-$age}"

  new_file="$students_dir/${new_name// /_}-$new_age.txt"

  echo -e "Name: $new_name\nAge: $new_age\nCourse: $new_course" > "$new_file"

  if [ "$file" != "$new_file" ]; then
    rm "$file"
  fi

  echo "🔁 Student updated."
}

delete_student() {
  read -p "Enter name: " name
  read -p "Enter age: " age
  file="$students_dir/${name// /_}-$age.txt"

  if [ -f "$file" ]; then
    rm "$file"
    echo "🗑️ Student deleted."
  else
    echo "❌ Student not found."
  fi
}

search_student() {
  read -p "Enter search keyword: " keyword
  echo "🔍 Searching for: $keyword"
  matches=$(grep -ril "$keyword" "$students_dir")

  if [ -z "$matches" ]; then
    echo "🚫 No matches found."
    return
  fi

  for file in $matches; do
    echo -e "\n📄 $(basename "$file")"
    cat "$file"
  done
}

show_help() {
  echo "Usage: $0 {add|list|update|delete|search|help}"
}

case "$1" in
  add) add_student ;;
  list) list_students ;;
  update) update_student ;;
  delete) delete_student ;;
  search) search_student ;;
  help | *) show_help ;;
esac

