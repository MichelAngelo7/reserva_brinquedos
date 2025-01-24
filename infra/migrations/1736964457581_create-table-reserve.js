exports.up = (pgm) => {
  pgm.createTable("event", {
    id: { type: "serial", primaryKey: true },
    date: { type: "date", notNull: true },
    title: { type: "varchar(1000)", notNull: true },
    timeinit: { type: "time", notNull: true },
    timeend: { type: "time", notNull: true },
    eventtype: { type: "varchar(1000)", notNull: true },
    status: { type: "varchar(255)", notNull: true },
    sketch: { type: "boolean", notNull: true },
    permitbh: { type: "varchar(255)", notNull: true },
    protocolpm: { type: "varchar(255)", notNull: true },
    information: { type: "varchar(4000)", notNull: true },
    createdAt: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
  });
  pgm.createTable("resource", {
    id: { type: "serial", primaryKey: true },
    name: { type: "varchar(1000)", notNull: true },
  });
  pgm.createTable("event_resources", {
    event_id: {
      type: "integer",
      notNull: true,
      references: '"event"',
      onDelete: "cascade",
    },
    resource_id: {
      type: "integer",
      notNull: true,
      references: '"resource"',
      onDelete: "cascade",
    },
    createdAt: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
  });
  pgm.addConstraint(
    "event_resources",
    "unique_event_resource",
    "UNIQUE(event_id, resource_id)",
  );
};

exports.down = (pgm) => {};
