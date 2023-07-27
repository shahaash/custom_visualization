view: testing {
  derived_table: {
    sql: select "Firewall rule activity" as view, "admin" as user, "Yes" as viewed_today, "New" as status, 10 as total_count, 2 as notable_events, date("2023-07-10") as date, 80 as risk_score union all
    select "Network Traffic activity" as view, "admin" as user, "Yes" as viewed_today, "Open" as status, 0 as total_count, 1 as notable_events, date("2023-07-03") date, 160 as risk_score union all
    select "Prohibited Services" as view,  "" as user, "No" as viewed_today, "Close" as status, 0 as total_count, 0 as notable_events, date("2023-06-26") as date, 0 as risk_score;;
  }

  dimension: view {
    type: string
    sql: ${TABLE}.view ;;
  }

  dimension: user {
    type: string
    sql: ${TABLE}.user ;;
  }

  dimension: viewed_today {
    type: string
    sql: ${TABLE}.viewed_today ;;
  }

  dimension: status {
    type: string
    sql: ${TABLE}.status ;;
  }

  dimension: Notable_Events {
    type: number
    sql: ${TABLE}.notable_events ;;
  }

  dimension: Time {
    type: date
    sql: ${TABLE}.date ;;
  }

  dimension: Risk_Score {
    type: number
    sql: ${TABLE}.risk_score ;;
  }

  dimension: Total {
    type: number
    sql: ${TABLE}.total_count ;;
  }

  measure: count {
    label: "count"
    type: count
  }
}
