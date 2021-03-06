USE [worker]
GO
/****** Object:  Table [dbo].[source]    Script Date: 10-07-2021 11:59:39 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[source](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](200) NULL,
	[type_id] [int] NULL,
	[description] [nvarchar](500) NULL,
	[labels] [nvarchar](100) NULL,
	[connection] [ntext] NULL,
	[authentication] [ntext] NULL,
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
