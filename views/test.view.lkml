view: test {
  derived_table: {
    sql: select "unassigned" as owner_id, "10" as status_new, "0" as status_open, "0" as status_closed, "Low" as risk_modifiers,;;
  }

  dimension: Owner {
    type: string
    sql: ${TABLE}.owner_id ;;
  }

  dimension: New {
    type: string
    sql: ${TABLE}.status_new ;;
  }

  dimension: Open {
    type: string
    sql: ${TABLE}.status_open ;;
  }

  dimension: Closed {
    type: string
    sql: ${TABLE}.status_closed ;;
  }

  dimension: Risk {
    type: string
    sql: ${TABLE}.risk_modifiers ;;
  }

  measure: count {
    label: "count"
    type: count
  }
}
