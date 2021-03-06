USE [worker]
GO
/****** Object:  Table [dbo].[job_source]    Script Date: 10-07-2021 11:59:39 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[job_source](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[job_id] [int] NULL,
	[source_id] [int] NULL,
	[is_deleted] [bit] NULL,
PRIMARY KEY CLUSTERED
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[job_source]  WITH CHECK ADD  CONSTRAINT [FK_job_source.job_id] FOREIGN KEY([job_id])
REFERENCES [dbo].[job] ([id])
GO
ALTER TABLE [dbo].[job_source] CHECK CONSTRAINT [FK_job_source.job_id]
GO
ALTER TABLE [dbo].[job_source]  WITH CHECK ADD  CONSTRAINT [FK_job_source.source_id] FOREIGN KEY([source_id])
REFERENCES [dbo].[source] ([id])
GO
ALTER TABLE [dbo].[job_source] CHECK CONSTRAINT [FK_job_source.source_id]
GO
