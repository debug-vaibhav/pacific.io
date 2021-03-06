USE [worker]
GO
/****** Object:  Table [dbo].[job]    Script Date: 10-07-2021 11:59:39 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[job](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](200) NULL,
	[description] [nvarchar](500) NULL,
	[timezone] [nvarchar](50) NULL,
	[cron_expression] [nvarchar](50) NULL,
	[type_id] [tinyint] NULL,
	[design] [ntext] NULL,
	[created_date] [datetime] NULL,
	[created_by] [int] NULL,
	[updated_date] [datetime] NULL,
	[updated_by] [int] NULL,
	[is_deleted] [bit] NULL,
PRIMARY KEY CLUSTERED
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
